import style from "./style.module.css"
export function Main({children}){
    console.log(children)
    return <main>
        
        {children}
        
    </main>
}