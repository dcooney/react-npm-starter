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
   const {label = 'Learn More', url} = props || {}

   /**
    * Example click handler.
    */
   function clickHandler() {
      alert('form button clicked')
   }

   return (
      <>
         {url ? (
            <a href={url} className="button-example">
               {label}
            </a>
         ) : (
            <button
               type="button"
               className="button-example"
               onClick={() => clickHandler()}
            >
               {label}
            </button>
         )}
      </>
   )
}
