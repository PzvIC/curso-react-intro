import React from "react"
import { createPortal } from "react-dom"
import "../styles/Modal.css"


function Modal({ children }) {
    return createPortal(
        <div className="spawn-modal">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }