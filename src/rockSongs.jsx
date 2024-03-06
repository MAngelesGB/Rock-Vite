
export function Song(props){
    return (
        <>
            <div className="list-song">
                <div className="img-song">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="rock-song">
                    <h2>{props.title}</h2>
                    
                    <div className="item">
                        <p className="attribute">Artist</p><p>{props.artist}</p>
                    </div>
                    <div className="item">
                        <p className="attribute">Album</p><p>{props.album}</p>
                    </div>
                    <div className="item">
                        <p className="attribute">listened</p><p>{props.listened ? "Listened" : "Not listened"}</p>
                    </div>
                
                </div>
            </div>
            
        </>
    )
}