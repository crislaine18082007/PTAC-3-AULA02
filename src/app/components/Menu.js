import Link from "next/link";

export default function Menu(){
    return(
        <header>
            <h1> 
<nav>
        <ul>
             <Link href="/"> <li>Home</li>  </Link>  
             <Link href="/"> <li>Registrer</li> </Link>  
        </ul>
</nav>

            </h1>
        </header>
    )
}