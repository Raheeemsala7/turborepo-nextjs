import Link from "next/link";


export function NavLink({href} :{href:string}) {
    return (
        <div>
            <Link href={href}>NavLink</Link>
        </div>
    );
}
