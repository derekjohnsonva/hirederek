function Header(props){
    return(
        <div className="PageHeder">
            <h2>{props.title}</h2>
            <h4>{props.subtitle}</h4>
            <hr/>
        </div>
    );
}

export default Header