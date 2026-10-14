import type { CSSProperties } from 'react'

// Shared button look for the app. globals.css is not loaded, so without this
// buttons fall back to tiny browser defaults. Works on <button> and on links
// styled as buttons. Spread a variant, then any per-button extras:
//   style={{ ...primaryButton, marginTop: 20 }}
const base: CSSProperties = {
  display: 'block',
  width: '100%',
  minHeight: 48,
  padding: '12px 20px',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  fontSize: '1.05rem',
  fontWeight: 700,
  lineHeight: 1.3,
  letterSpacing: '0.5px',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: 8, // matches the answer choices
  cursor: 'pointer',
  boxSizing: 'border-box',
  WebkitAppearance: 'none',
  appearance: 'none',
}

// The main action on a screen.
export const primaryButton: CSSProperties = {
  ...base,
  backgroundColor: '#C5A46D',
  color: '#171717',
  border: '1px solid #C5A46D',
}

// Every other action.
export const secondaryButton: CSSProperties = {
  ...base,
  backgroundColor: '#ffffff',
  color: '#171717',
  border: '1px solid #C5A46D',
}

// Destructive actions (outline) — keeps the red warning styling.
export const dangerButton: CSSProperties = {
  ...base,
  backgroundColor: '#ffffff',
  color: '#c0392b',
  border: '1px solid #c0392b',
}

// The final confirmation of a destructive action (solid red).
export const dangerSolidButton: CSSProperties = {
  ...base,
  backgroundColor: '#c0392b',
  color: '#ffffff',
  border: '1px solid #c0392b',
}
