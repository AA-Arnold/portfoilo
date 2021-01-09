export default function Nav(){
    return(
        <nav className ='p-4 bg-purple-sec flex justify-between'>
            <div className='text-purple-200'>LOGO</div>
            <div className='space-x-7 text-white'>
                <span>About</span>
                <span>Home</span>
                <span>Skills</span>
                <span>Project</span>
                <span>Blog</span>
                <span className='hover:text-purple-high'>Contact</span>
            </div>
        </nav>
    )
}