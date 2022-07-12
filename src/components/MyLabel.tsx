import React from 'react'
import './mylabel.css';


export interface MyLabelProps {
    /**
     * Mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Tamaños de la etiqueta
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Elije el color
     */
    colorCustom?: string;
    /**
     * Colores disponibles
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Poner en Mayusculas
     */
    allCaps?: boolean;
    /**
     * Poner backgroundColor
     */
    backgroundColor?: string;
}

/**
 * Interaccion con el compente de la etiqueta
 */
export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    colorCustom,
    backgroundColor = 'transparent',
    ...props
}:MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color} }`}
    style={{ color: colorCustom, backgroundColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;
