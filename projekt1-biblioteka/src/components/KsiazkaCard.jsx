export default function KsiazkaCard({ksiazka, onPrzelaczUlubiona}){
    return(
        <div className="col-12 col-md-4">
            <div className={`card h-100 ${ksiazka.dostepna ? 'border-success' : 'border-danger'} d-flex flex-col`}>
                <div className="card-body">
                    <div className="card-title h4">
                        {ksiazka.tytul}
                    </div>
                    <div className="card-text">
                        {ksiazka.autor}<br></br>
                        <span className={`badge text-bg-${ksiazka.dostepna ? 'success' : 'danger'}`}>
                            {ksiazka.dostepna ? 'dostepna' : 'niedostepna'}</span>
                    </div>
                </div>
                <button type="button" style={{color: "yellow", fontSize: "20px"}} 
                    className="btn btn-link" onClick={() => onPrzelaczUlubiona(ksiazka.id)}
                    >{ksiazka.ulubiona ? '★':'☆'}</button>
            </div>
        </div>
    )
}