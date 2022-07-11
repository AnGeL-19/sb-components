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
    ...props
}:MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color} }`}
    style={{ color: colorCustom }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
