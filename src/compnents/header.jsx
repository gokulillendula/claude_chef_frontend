import image from '../assets/chef-claude-icon.png'
export default function Header(){
    return(
        <header>
            <img src={image} alt='logo'/>
            <h1>Claude Chef</h1>
        </header>
    )
}