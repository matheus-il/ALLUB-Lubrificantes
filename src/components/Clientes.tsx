import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { 
  validateCPF, 
  validateCNPJ, 
  formatPhone, 
  formatCPFOrCNPJ, 
  cleanDoc 
} from '../utils/validation';
import { 
  Search, Plus, Edit2, Trash2, X, Check, MapPin, Phone, Mail, User, ShieldAlert 
} from 'lucide-react';

interface Cliente {
  id: string;
  cnpj_cpf: string;
  nome_fantasia: string;
  razao_social: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  telefone_1: string;
  telefone_2: string;
  email: string;
}

interface ClientesProps {
  userId: string;
}

export const Clientes: React.FC<ClientesProps> = ({ userId }) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Controle de modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCliente, setEditingCliente] = useState<Cliente | null>(null);
  
  // Campos do formulário
  const [cnpjCpf, setCnpjCpf] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [email, setEmail] = useState('');
  
  // Mensagens e erros
  const [formError, setFormError] = useState<string | null>(null);
  const [saveLoading, setSaveLoading] = useState(false);
  
  // Modal de confirmação de exclusão
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('clientes')
        .select('*')
        .order('nome_fantasia', { ascending: true });
        
      if (error) throw error;
      setClientes(data || []);
    } catch (err: any) {
      console.error('Erro ao buscar clientes:', err.message);
    } finally {
      setLoading(false);
    }
  };

  // Busca de CEP na BrasilAPI
  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const cleaned = cleanDoc(rawVal);
    
    // Máscara 99999-999
    let masked = cleaned;
    if (cleaned.length > 5) {
      masked = `${cleaned.substring(0, 5)}-${cleaned.substring(5, 8)}`;
    }
    setCep(masked);

    if (cleaned.length === 8) {
      try {
        const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${cleaned}`);
        if (res.ok) {
          const data = await res.json();
          setRua(data.street || '');
          setBairro(data.neighborhood || '');
          setCidade(data.city || '');
          setEstado(data.state || '');
        }
      } catch (err) {
        console.error('Erro ao buscar CEP via BrasilAPI:', err);
      }
    }
  };

  const handleCnpjCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const cleaned = cleanDoc(rawVal);
    
    // Aplica a formatação do documento
    setCnpjCpf(formatCPFOrCNPJ(cleaned));
  };

  const handlePhone1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone1(formatPhone(e.target.value));
  };

  const handlePhone2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone2(formatPhone(e.target.value));
  };

  const openAddModal = () => {
    setEditingCliente(null);
    setCnpjCpf('');
    setNomeFantasia('');
    setRazaoSocial('');
    setCep('');
    setRua('');
    setNumero('');
    setBairro('');
    setCidade('');
    setEstado('');
    setTelefone1('');
    setTelefone2('');
    setEmail('');
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (cliente: Cliente) => {
    setEditingCliente(cliente);
    setCnpjCpf(formatCPFOrCNPJ(cliente.cnpj_cpf));
    setNomeFantasia(cliente.nome_fantasia);
    setRazaoSocial(cliente.razao_social || '');
    setCep(cliente.cep || '');
    setRua(cliente.rua || '');
    setNumero(cliente.numero || '');
    setBairro(cliente.bairro || '');
    setCidade(cliente.cidade || '');
    setEstado(cliente.estado || '');
    setTelefone1(formatPhone(cliente.telefone_1));
    setTelefone2(cliente.telefone_2 ? formatPhone(cliente.telefone_2) : '');
    setEmail(cliente.email || '');
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    const docCleaned = cleanDoc(cnpjCpf);
    
    // 1. Validação matemática do documento
    if (docCleaned.length <= 11) {
      if (!validateCPF(docCleaned)) {
        setFormError('CPF inválido! Por favor, verifique os dígitos.');
        return;
      }
    } else {
      if (!validateCNPJ(docCleaned)) {
        setFormError('CNPJ inválido! Por favor, verifique os dígitos.');
        return;
      }
    }

    setSaveLoading(true);

    try {
      // 2. Validação de Unicidade
      // Verifica se o CPF/CNPJ já existe (excluindo o próprio se for edição)
      let query = supabase
        .from('clientes')
        .select('id')
        .eq('cnpj_cpf', docCleaned)
        .eq('user_id', userId);
        
      if (editingCliente) {
        query = query.neq('id', editingCliente.id);
      }
      
      const { data: duplicateCheck, error: checkError } = await query;
      if (checkError) throw checkError;
      
      if (duplicateCheck && duplicateCheck.length > 0) {
        setFormError('Este CPF ou CNPJ já está cadastrado para outro cliente.');
        setSaveLoading(false);
        return;
      }

      const payload = {
        user_id: userId,
        cnpj_cpf: docCleaned,
        nome_fantasia: nomeFantasia,
        razao_social: razaoSocial || null,
        cep: cleanDoc(cep) || null,
        rua: rua || null,
        numero: numero || null,
        bairro: bairro || null,
        cidade: cidade || null,
        estado: estado || null,
        telefone_1: cleanDoc(telefone1),
        telefone_2: cleanDoc(telefone2) || null,
        email: email || null
      };

      if (editingCliente) {
        // Atualizar
        const { error } = await supabase
          .from('clientes')
          .update(payload)
          .eq('id', editingCliente.id);
          
        if (error) throw error;
      } else {
        // Inserir
        const { error } = await supabase
          .from('clientes')
          .insert(payload);
          
        if (error) throw error;
      }

      setIsModalOpen(false);
      fetchClientes();
    } catch (err: any) {
      setFormError(err.message || 'Erro ao salvar cliente.');
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('clientes')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      setDeleteConfirmId(null);
      fetchClientes();
    } catch (err: any) {
      alert('Erro ao excluir cliente: ' + err.message);
    }
  };

  // Filtrar lista por pesquisa
  const filteredClientes = clientes.filter(c => {
    const term = search.toLowerCase();
    const nomeFantasia = c.nome_fantasia || '';
    const razaoSocial = c.razao_social || '';
    const cnpjCpf = c.cnpj_cpf || '';
    return (
      nomeFantasia.toLowerCase().includes(term) ||
      razaoSocial.toLowerCase().includes(term) ||
      cnpjCpf.includes(cleanDoc(term))
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px' }}>
      
      {/* Barra de Pesquisa */}
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <input
          type="text"
          className="input-field"
          placeholder="Buscar por nome, razão ou CPF/CNPJ..."
          style={{ width: '100%', paddingLeft: '44px', borderRadius: 'var(--radius-lg)' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search 
          size={18} 
          style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-muted)' }} 
        />
      </div>

      {/* Lista de Clientes */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '80px' }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <div className="spinner" />
          </div>
        ) : filteredClientes.length === 0 ? (
          <div className="empty-state">
            <User size={48} className="empty-state-icon" />
            <p>Nenhum cliente cadastrado ou encontrado.</p>
            {search && <button className="btn btn-secondary" onClick={() => setSearch('')}>Limpar busca</button>}
          </div>
        ) : (
          filteredClientes.map((cliente) => (
            <div 
              key={cliente.id} 
              className="glass" 
              style={{
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'relative',
                transition: 'transform 0.2s',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Cabeçalho do Card */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: 16, color: '#fff', fontWeight: 600 }}>{cliente.nome_fantasia || 'Sem Nome'}</h3>
                  <span style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 600, display: 'inline-block', marginTop: 2 }}>
                    {(cliente.cnpj_cpf || '').length === 11 ? 'CPF' : 'CNPJ'}: {formatCPFOrCNPJ(cliente.cnpj_cpf || '')}
                  </span>
                </div>
                {/* Ações */}
                <div style={{ display: 'flex', gap: 4 }}>
                  <button 
                    onClick={() => openEditModal(cliente)}
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
                    onClick={() => setDeleteConfirmId(cliente.id)}
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

              {/* Informações de Contato */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>
                {cliente.razao_social && (
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Razão: {cliente.razao_social}</div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Phone size={13} className="text-muted" />
                  <span>{formatPhone(cliente.telefone_1 || '')} {cliente.telefone_2 && `/ ${formatPhone(cliente.telefone_2 || '')}`}</span>
                </div>
                {cliente.email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Mail size={13} className="text-muted" />
                    <span>{cliente.email}</span>
                  </div>
                )}
                {(cliente.cidade || cliente.estado) && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <MapPin size={13} className="text-muted" />
                    <span>
                      {cliente.rua && `${cliente.rua}, `}{cliente.numero && `${cliente.numero} - `}{cliente.cidade}/{cliente.estado}
                    </span>
                  </div>
                )}
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
                {editingCliente ? 'Editar Cliente' : 'Cadastrar Cliente'}
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
                <label className="input-label">CPF ou CNPJ *</label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="000.000.000-00 ou 00.000.000/0000-00"
                  value={cnpjCpf}
                  onChange={handleCnpjCpfChange}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Nome Fantasia *</label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="Nome Comercial"
                  value={nomeFantasia}
                  onChange={(e) => setNomeFantasia(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Razão Social</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Razão Social completa"
                  value={razaoSocial}
                  onChange={(e) => setRazaoSocial(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 12 }}>
                <div className="input-group">
                  <label className="input-label">CEP</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="00000-000"
                    maxLength={9}
                    value={cep}
                    onChange={handleCepChange}
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Número</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Nº ou S/N"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Rua</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Preenchido via CEP"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Bairro</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Preenchido via CEP"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
                <div className="input-group">
                  <label className="input-label">Cidade</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Estado</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="UF"
                    maxLength={2}
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Telefone 1 *</label>
                <input
                  type="tel"
                  required
                  className="input-field"
                  placeholder="(00) 00000-0000"
                  value={telefone1}
                  onChange={handlePhone1Change}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Telefone 2</label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="(00) 00000-0000"
                  value={telefone2}
                  onChange={handlePhone2Change}
                />
              </div>

              <div className="input-group">
                <label className="input-label">E-mail</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="cliente@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }} disabled={saveLoading}>
                {saveLoading ? (
                  <div className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
                ) : (
                  <>
                    <Check size={18} /> Salvar Cliente
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
              <h3 style={{ fontSize: 18, color: '#fff' }}>Excluir Cliente?</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>
                Essa ação é permanente e não poderá ser desfeita. Todos os dados deste cliente serão apagados.
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
