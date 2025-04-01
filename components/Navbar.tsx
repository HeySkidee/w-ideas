import { auth, signIn, signOut } from "@/auth"
import Link from "next/link"
import { redirect } from "next/navigation"

async function Navbar() {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href={'/'} className="text-2xl text-black font-bold">
                    <span className="text-pink-600">W</span> ideas ✨
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href={'/startup/create'}>
                                <span>Create</span> 
                            </Link>

                            <form action={async ()=>{
                                "use server"
                                await signOut(redirect('/'))
                            }}>
                                <button type="submit" className="cursor-pointer">Logout</button>
                            </form>

                            <Link href={`/user/${session?.user.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server"
                            await signIn('github')
                        }}>
                            <button type="submit" className="cursor-pointer">Login</button>                            
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar