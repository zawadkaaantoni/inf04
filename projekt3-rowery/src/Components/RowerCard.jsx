export default function RowerCard({rower, usunRower}){
    return(
        <div className="col-12 col-md-4">
            <div className={`card h-100 ${!rower.dostepny ? 'opacity-50' : ''}`}>
                <div className="card-body">
                    <h1 className="card-title h4">
                        {rower.model}
                        <span className="badge text-bg-secondary"></span>
                    </h1>
                    <div className="card-text">
                        typ {rower.typ}
                    </div>
                    <button className="btn btn-outline-danger" onClick={() => usunRower(rower.id)}>usun</button>
                </div>
            </div>
        </div>
    )
}