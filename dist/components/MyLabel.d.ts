/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Tamaños de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
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
export declare const MyLabel: ({ label, size, color, allCaps, colorCustom, backgroundColor, ...props }: MyLabelProps) => JSX.Element;
