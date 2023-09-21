/* eslint-disable @next/next/no-img-element */
const NoResults = () => {
    return ( 
        <div className="flex items-center justify-center h-full w-full text-neutral-500 ">
            No se han encontrado resultados para esta búsqueda
            <img src="https://http.cat/status/404" alt="" />
        </div>
     );
}
 
export default NoResults;