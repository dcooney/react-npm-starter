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

   if (!label) {
      return null
   }
   return (
      <>
         {url ? (
            <a href={url} className="button-example">
               {label}
            </a>
         ) : (
            <button type="button" className="button-example">
               {label}
            </button>
         )}
      </>
   )
}
