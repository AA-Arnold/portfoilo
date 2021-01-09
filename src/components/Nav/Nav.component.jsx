export default function Nav(){
    return(
        <nav className ='p-4 bg-purple-sec flex justify-between fixed w-screen top-0 '>
            <div className='text-purple-200'>LOGO</div>
            <div className='space-x-7 text-white mr-8'>
                <span>Home</span>
                <span>About</span>
                <span>Skills</span>
                <span>Project</span>
                <span>Blog</span>
                <span className='hover:text-purple-high'>Contact</span>
            </div>
        </nav>
    )
}