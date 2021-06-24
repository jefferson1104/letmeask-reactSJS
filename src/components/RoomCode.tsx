import toast, { Toaster } from 'react-hot-toast';
import copyImg from "../assets/images/copy.svg";

import "../styles/room-code.scss"

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)

    toast.success('Código copiado', {
      duration: 3000,
        position: "bottom-center",
        style: {
          border: '1px solid #835afd',
          padding: '16px',
          color: '#29292e',
          marginBottom: '100px'
        },
    });
  }

  return (
    <>
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copiar código da sala" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
      <Toaster />
    </>
  )
}