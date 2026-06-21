import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { 
  Search, Plus, Edit2, Trash2, X, Check, ShoppingBag, DollarSign, ShieldAlert 
} from 'lucide-react';

interface Produto {
  id: string;
  codigo: number;
  nome_descricao: string;
  valor: number;
}

interface ProdutosProps {
  userId: string;
}

export const Produtos: React.FC<ProdutosProps> = ({ userId }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Controle de modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduto, setEditingProduto] = useState<Produto | null>(null);
  
  // Campos do formulário
  const [codigo, setCodigo] = useState('');
  const [nomeDescricao, setNomeDescricao] = useState('');
  const [valor, setValor] = useState('');
  
  // Mensagens e erros
  const [formError, setFormError] = useState<string | null>(null);
  const [saveLoading, setSaveLoading] = useState(false);
  
  // Modal de confirmação de exclusão
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  async function fetchProdutos() {
    setLoading(true);
    try {
      // Regra de Negócio: A listagem de produtos deverá ser sempre em ordem alfabética.
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('user_id', userId);
        
      if (error) throw error;

      // Ordena no frontend também por segurança extra para garantir A-Z estrito independente do collation do banco
      const sorted = (data || []).sort((a, b) => 
        a.nome_descricao.localeCompare(b.nome_descricao, 'pt-BR', { sensitivity: 'base' })
      );

      setProdutos(sorted);
    } catch (err: any) {
      console.error('Erro ao buscar produtos:', err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openAddModal = () => {
    setEditingProduto(null);
    setCodigo('');
    setNomeDescricao('');
    setValor('');
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (produto: Produto) => {
    setEditingProduto(produto);
    setCodigo(produto.codigo.toString());
    setNomeDescricao(produto.nome_descricao);
    setValor(produto.valor.toString());
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const valParsed = parseFloat(valor.replace(',', '.'));
    if (isNaN(valParsed) || valParsed <= 0) {
      setFormError('Por favor, digite um valor maior do que zero.');
      return;
    }

    if (valParsed >= 100000000) {
      setFormError('O valor máximo permitido é R$ 99.999.999,99.');
      return;
    }

    let codParsed: number | undefined = undefined;
    if (codigo.trim()) {
      codParsed = parseInt(codigo, 10);
      if (isNaN(codParsed) || codParsed <= 0) {
        setFormError('O código do produto deve ser um número inteiro maior que zero.');
        return;
      }
    }

    setSaveLoading(true);

    try {
      const payload: any = {
        user_id: userId,
        nome_descricao: nomeDescricao,
        valor: valParsed
      };

      if (codParsed !== undefined) {
        payload.codigo = codParsed;
      }

      if (editingProduto) {
        // Atualizar
        const { error } = await supabase
          .from('produtos')
          .update(payload)
          .eq('id', editingProduto.id);
          
        if (error) throw error;
      } else {
        // Inserir
        const { error } = await supabase
          .from('produtos')
          .insert(payload);
          
        if (error) throw error;
      }

      setIsModalOpen(false);
      fetchProdutos();
    } catch (err: any) {
      setFormError(err.message || 'Erro ao salvar produto.');
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('produtos')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      setDeleteConfirmId(null);
      fetchProdutos();
    } catch (err: any) {
      alert('Erro ao excluir produto: ' + err.message);
    }
  };

  // Filtrar lista por pesquisa (Código ou Nome)
  const filteredProdutos = produtos.filter(p => {
    const term = search.toLowerCase();
    return (
      p.nome_descricao.toLowerCase().includes(term) ||
      p.codigo.toString().includes(term)
    );
  });

  // Função para formatar moeda R$
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(val);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px' }}>
      
      {/* Barra de Pesquisa */}
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <input
          type="text"
          className="input-field"
          placeholder="Buscar por código ou descrição..."
          style={{ width: '100%', paddingLeft: '44px', borderRadius: 'var(--radius-lg)' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search 
          size={18} 
          style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-muted)' }} 
        />
      </div>

      {/* Lista de Produtos */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '80px' }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <div className="spinner" />
          </div>
        ) : filteredProdutos.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={48} className="empty-state-icon" />
            <p>Nenhum produto cadastrado ou encontrado.</p>
            {search && <button className="btn btn-secondary" onClick={() => setSearch('')}>Limpar busca</button>}
          </div>
        ) : (
          filteredProdutos.map((produto) => (
            <div 
              key={produto.id} 
              className="glass" 
              style={{
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      padding: '2px 8px', 
                      borderRadius: 4, 
                      fontSize: 11, 
                      fontWeight: 700, 
                      color: 'var(--text-secondary)' 
                    }}
                  >
                    CÓD: {produto.codigo}
                  </span>
                </div>
                <h3 style={{ fontSize: 15, color: '#fff', marginTop: 6, fontWeight: 500 }}>
                  {produto.nome_descricao}
                </h3>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--primary)', display: 'block', marginTop: 4 }}>
                  {formatCurrency(produto.valor)}
                </span>
              </div>

              {/* Ações */}
              <div style={{ display: 'flex', gap: 4 }}>
                <button 
                  onClick={() => openEditModal(produto)}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <Edit2 size={15} />
                </button>
                <button 
                  onClick={() => setDeleteConfirmId(produto.id)}
                  style={{
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px',
                    color: 'var(--danger)',
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Botão Flutuante de Adicionar */}
      <button
        onClick={openAddModal}
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          color: '#000',
          border: 'none',
          boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'transform 0.2s'
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Plus size={28} />
      </button>

      {/* Modal / Gaveta de Cadastro e Edição */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, color: '#fff' }}>
                {editingProduto ? 'Editar Produto' : 'Cadastrar Produto'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {formError && (
                <div style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: 'var(--danger)',
                  padding: 12,
                  borderRadius: 'var(--radius-md)',
                  fontSize: 14,
                  textAlign: 'center'
                }}>
                  {formError}
                </div>
              )}

              <div className="input-group">
                <label htmlFor="codigo" className="input-label">Código do Produto</label>
                <input
                  id="codigo"
                  type="text"
                  className="input-field"
                  placeholder="Gerado automático se vazio"
                  value={codigo}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, '');
                    setCodigo(cleaned);
                  }}
                />
              </div>

              <div className="input-group">
                <label htmlFor="nomeDescricao" className="input-label">Nome / Descrição *</label>
                <input
                  id="nomeDescricao"
                  type="text"
                  required
                  className="input-field"
                  placeholder="Ex: Óleo Lubrificante 20W50 Mineral"
                  value={nomeDescricao}
                  onChange={(e) => setNomeDescricao(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="valor" className="input-label">Valor (R$) *</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <DollarSign 
                    size={16} 
                    style={{ position: 'absolute', left: 16, color: 'var(--text-muted)' }} 
                  />
                  <input
                    id="valor"
                    type="text"
                    required
                    className="input-field"
                    placeholder="0,00"
                    style={{ width: '100%', paddingLeft: 40 }}
                    value={valor}
                    onChange={(e) => {
                      const val = e.target.value;
                      // Keep only digits and decimal separators
                      let cleaned = val.replace(/[^0-9.,]/g, '');
                      
                      // Normalize decimal separator (use comma or dot)
                      const firstSeparatorIndex = cleaned.search(/[.,]/);
                      if (firstSeparatorIndex !== -1) {
                        const before = cleaned.slice(0, firstSeparatorIndex);
                        const after = cleaned.slice(firstSeparatorIndex + 1).replace(/[.,]/g, '');
                        // Limit decimal part to 2 digits
                        cleaned = before + cleaned[firstSeparatorIndex] + after.slice(0, 2);
                      }
                      
                      // Split integer and decimal parts
                      const parts = cleaned.split(/[.,]/);
                      const integerPart = parts[0];
                      
                      // Limit integer part to 8 digits
                      if (integerPart.length > 8) {
                        return;
                      }
                      
                      setValor(cleaned);
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }} disabled={saveLoading}>
                {saveLoading ? (
                  <div className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
                ) : (
                  <>
                    <Check size={18} /> Salvar Produto
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {deleteConfirmId && (
        <div className="modal-overlay" style={{ alignItems: 'center', padding: 24 }}>
          <div 
            className="glass" 
            style={{
              width: '100%',
              maxWidth: 360,
              borderRadius: 'var(--radius-lg)',
              padding: 24,
              backgroundColor: 'var(--bg-card)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}
          >
            <ShieldAlert size={48} color="var(--danger)" style={{ margin: '0 auto' }} />
            <div>
              <h3 style={{ fontSize: 18, color: '#fff' }}>Excluir Produto?</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>
                Essa ação apagará permanentemente o produto do seu catálogo.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary" onClick={() => setDeleteConfirmId(null)}>
                Cancelar
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(deleteConfirmId)}>
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
