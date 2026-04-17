import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import Curriculo from '../../assets/Curriculo_Kaya_Haufe.pdf';
import FichaTecnica from '../../assets/modelo_ficha_equipe.pdf';
import profileImage from '../../assets/profile.jpeg';
import groupImage from '../../assets/viventi-logo.png';

export default function Sobre() {
  const footer = (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>

      <div className="sobre-footer-section">
        <Avatar image={profileImage} size="xlarge" shape="circle" />
        <h4>Kaya Haufe</h4>
        <span style={{ fontSize: '0.8rem', color: 'var(--ginkle-300)' }}>Desenvolvedor do projeto original</span>
        <div className="sobre-footer-actions">
          <a href="https://www.linkedin.com/in/kayahaufe" target="_blank" rel="noreferrer">
            <Button label="LinkedIn" icon="pi pi-linkedin" className="linkedin-button" size="small" />
          </a>
          <a href={Curriculo} download="Curriculo_Kaya_Haufe.pdf">
            <Button label="Currículo" icon="pi pi-download" className="p-button-success" size="small" />
          </a>
        </div>
      </div>

      <div className="sobre-footer-section">
        <Avatar image={groupImage} size="xlarge" shape="circle" style={{ background: 'var(--ginkle-100)' }} />
        <h4>Viventi</h4>
        <span style={{ fontSize: '0.8rem', color: 'var(--ginkle-300)' }}>Equipe de desenvolvimento do projeto Ginkle</span>
        <div className="sobre-footer-actions">
          <a href="https://linktr.ee/viventi" target="_blank" rel="noreferrer">
            <Button label="Links" icon="pi pi-link" className="linkedin-button" size="small" />
          </a>
          <a href={FichaTecnica} download="Ficha_Viventi.pdf">
            <Button label="Ficha Técnica" icon="pi pi-download" className="p-button-success" size="small" />
          </a>
        </div>
      </div>

    </div>
  );

  return (
    <div className="sobre flex justify-content-center align-items-center">
      <Card
        title="Ginkle — Sistema de Gestão para ILPI"
        footer={footer}
      >
        <section>
          <h2>Visão Geral</h2>
          <p>
            O <strong>Ginkle</strong> é um sistema de gestão desenvolvido para <strong>Instituições de Longa Permanência para Idosos (ILPIs)</strong>.
            A plataforma permite que casas de repouso cadastrem suas unidades, gerenciem residentes e equipes,
            e facilitem a comunicação entre a instituição e os familiares dos idosos.
          </p>
        </section>

        <section>
          <h2>Funcionalidades Principais</h2>
          <ul>
            <li>Cadastro e gestão de casas de repouso parceiras</li>
            <li>Comunicação transparente entre familiares e instituições</li>
            <li>Avaliação e comentários de casas de repouso</li>
            <li>Busca com paginação para grandes volumes de dados</li>
          </ul>
        </section>

        <section>
          <h2>Tecnologias Utilizadas</h2>
          <ul>
            <li>React para a construção da interface do usuário</li>
            <li>PrimeReact e PrimeFlex para componentes e layout</li>
            <li>Axios para integração com APIs REST</li>
            <li>Vite para desenvolvimento e build da aplicação</li>
          </ul>
        </section>
      </Card>
    </div>
  );
}