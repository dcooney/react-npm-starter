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
      <a
         href={url}
         className="inline-block bg-gray-50 hover:bg-gray-100 font-semibold rounded-md border px-4 py-2"
      >
         {label}
      </a>
   )
}
