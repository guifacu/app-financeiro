'use client';

import {
  PiggyBank,
  PlusCircle,
  BanknoteArrowDown,
  BanknoteArrowUp,
  Banknote,
  ShoppingCart,
  Gamepad2,
  Lock,
  Store,
  Volleyball,
} from 'lucide-react';
import './globals.css';

export default function Home() {
  return (  
    <div className="conteiner">
      <div className="cabecalho">
        <PiggyBank size={45} className="icone verde" />
        <button className="botao-adicionar">
          <PlusCircle size={20} className="icone" />
        </button>
      </div>

      <div className="cartoes">
        <div className="cartao">
          <div className="cartao-cabecalho">
            <span>Entradas</span>
            <BanknoteArrowDown className="icone branco" size={30} />
          </div>
          <p className="valor verde">R$ 43.231,00</p>
          <p className="descricao">Somada todas as entradas do período.</p>
        </div>
        <div className="cartao">
          <div className="cartao-cabecalho">
            <span>Saídas</span>
            <BanknoteArrowUp className="icone branco" size={30} />
          </div>
          <p className="valor vermelho">R$ 2.265,05</p>
          <p className="descricao">Somada todas as saídas do período.</p>
        </div>
        <div className="cartao">
          <div className="cartao-cabecalho">
            <span>Balanço</span>
            <Banknote className="icone branco" size={30} />
          </div>
          <p className="valor verde">R$ 40.965,95</p>
          <p className="descricao">Somada todas as entradas e saídas do período.</p>
        </div>
      </div>

      <div className="secao-central">
        <div className="secao-analise">
          <h2 className="titulo-secao">Análise</h2>
          <div className="analise">
            <div className="caixa-grafico"></div>
          </div>
        </div>

        <div className='secao-categorias'>
          <h2 className="titulo-secao">Categorias</h2>
          <div className="categorias">

            <div className="categoria destaque">
              <Lock size={16} />
              <span>Alimentação</span>
              <span>10</span>
              <span>R$ 954,15</span>
            </div>

            <div className="categoria">
              <Store size={16} />
              <span>Mercado</span>
              <span>8</span>
              <span>R$ 508,90</span>
            </div>

            <div className="categoria">
              <Gamepad2 size={16} />
              <span>Lazer</span>
              <span>5</span>
              <span>R$ 123,00</span>
            </div>

            <div className="categoria">
              <Volleyball size={16} />
              <span>Basquete</span>
              <span>5</span>
              <span>R$ 679,00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="transacoes">
        <h2 className='titulo-secao'>Transações</h2>

        <div className="cabecalho-tabela">
          <span className="coluna">Descrição</span>
          <span className="coluna">Tipo</span>
          <span className="coluna">Valor</span>
          <span className="coluna">Banco</span>
          <span className="coluna">Data</span>
          <span className="coluna">Parcelas</span>
        </div>

        <div className="transacao">
          <div className="coluna">
            <ShoppingCart size={16} />
            Playstation
          </div>
          <div className="coluna">Crédito</div>
          <div className="coluna vermelho">R$ 350,00</div>
          <div className="coluna">Banco do Brasil</div>
          <div className="coluna">04/05/2025</div>
          <div className="coluna">1/4</div>
        </div>

        <div className="transacao">
          <div className="coluna">
            <ShoppingCart size={16} />
            Mercadinho do Jorjão
          </div>
          <div className="coluna">Débito</div>
          <div className="coluna vermelho">R$ 200,00</div>
          <div className="coluna">Nubank</div>
          <div className="coluna">20/04/2022</div>
          <div className="coluna"></div>
        </div>

        <div className="transacao">
          <div className="coluna">
            <ShoppingCart size={16} />
            HBO Max
          </div>
          <div className="coluna">Crédito</div>
          <div className="coluna vermelho">R$ 54,90</div>
          <div className="coluna">Caixa</div>
          <div className="coluna">01/05/2025</div>
          <div className="coluna">5/12</div>
        </div>
      </div>
    </div>
  );
}

