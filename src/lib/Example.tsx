import './example.css'

// Example props interface.
interface useExampleProps {
   label?: string
   url?: string
}

/**
 * Example Component.
 */
export default function Example(props: useExampleProps | null = null) {
   const {label, url} = props || {}

   if (!label || !url) {
      return null
   }
   return (
      <a href={url} className="button-example">
         {label}
      </a>
   )
}
