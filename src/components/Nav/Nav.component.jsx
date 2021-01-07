export default function Nav(){
    return(
        <nav className ='p-6 bg-purple-900 flex'>
            <div className='text-purple-200'>LOGO</div>
            <div className='space-x-7'>
                <span className='text-white'>About</span>
                <span className='text-white'>Home</span>
                <span className='text-white'>Skills</span>
                <span className='text-white'>Project</span>
                <span className='text-white'>Blog</span>
                <span className='text-white'>Contact</span>
            </div>
        </nav>
    )
}