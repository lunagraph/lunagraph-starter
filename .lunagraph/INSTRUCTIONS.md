# Lunagraph Component Guidelines

When creating or editing React components in this project, follow these rules so Lunagraph can scan and edit them visually.

## Component Structure

- **One component per file** - Each component in its own `.tsx` file
- **Named exports only** - Use `export function Button()`, NOT `export default`
- **Match filename to component** - `Button.tsx` exports `Button`

## Props

- **Type all props** with TypeScript interfaces
- **Use string unions for variants** - Creates dropdowns in the editor:
  ```tsx
  variant?: 'primary' | 'secondary' | 'ghost'
  ```
- **Keep props simple** - Strings, numbers, booleans work best
- **Avoid complex objects** - Flatten into simpler props when possible

## Example

```tsx
// components/Card.tsx
interface CardProps {
  title: string
  description?: string
  variant?: 'default' | 'outlined' | 'elevated'
  children?: React.ReactNode
}

export function Card({ title, description, variant = 'default', children }: CardProps) {
  return (
    <div className={cn('rounded-lg p-4', variantStyles[variant])}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}
```

## Scanned Locations

This project scans:
- `components/**/*.tsx`
- `app/**/*.tsx` (includes pages)

You can customize patterns in `package.json` under the `scan` script.

## Save to Code

When editing components visually and clicking "Save to code":
- Lunagraph uses Claude CLI (if available) to merge changes back
- It preserves all imports, hooks, logic, and expressions
- Only the visual changes (styles, text, structure) are applied
