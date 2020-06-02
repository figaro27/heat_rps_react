import React, { 
  lazy,
  useRef,
  useState, 
  useEffect,
  useLayoutEffect,
} from 'react';

import './Lobby.css';
import { config } from '../../config.js';

const Lobby = ({ enterGame, accounts, setAccounts }) => {


const changeAccount = (acc) => {

  if ( acc === 2 ) {
    setAccounts(
      {
        name: config.ACCOUNT2.NAME,
        secret: config.ACCOUNT2.SECRET,
        id: config.ACCOUNT2.ID,
        opponent: config.ACCOUNT2.OPPONENT
      })
  } else {
    setAccounts(
      {
        name: config.ACCOUNT.NAME,
        secret: config.ACCOUNT.SECRET,
        id: config.ACCOUNT.ID,
        opponent: config.ACCOUNT.OPPONENT
      })
  }
}

  return (
    <div className="Lobby">
      <h1>LOBBY</h1>

      <p><input type="button" onClick={() => changeAccount(1)} value="SET ACCOUNT 1" /><br /><input type="button" onClick={() => changeAccount(2)} value="SET ACCOUNT 2" /></p>

      <p>Player 1</p>
      <p>
      <input placeholder="Account Name (email)" id="name" type="text" className="inpName" value={accounts.name || ''} />
      </p>
      <input placeholder="Secret phrase" id="secret" type="text" className="inpSecret" value={accounts.secret || ''} />
      <p>Opponent id</p>
      <p>
      <input placeholder="id" id="opponentId" type="text" class="inpname" value={accounts.opponent || ''} />
      </p>   
      <p><input type="button" onClick={() => enterGame(1)} value="PLAYER 1" /></p>
      <p><input type="button" onClick={() => enterGame(2)} value="PLAYER 2" /></p>
    </div>
  );
}

export default Lobby;
