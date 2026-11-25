export default function PrzepisCard({przepis}){
    return(
        <div className="col-12 col-md-4">
        <div className="card h-100">
            <div className="card-body">
                <div className="card-title h5">
                    {przepis.nazwa}
                </div>
                <div className="card-text">
                    <span className="badge text-bg-secondary mb-2">{przepis.kategoria }</span>
                    <p className="text-body-seconadry mb-0">czas przygotowania: {przepis.czas} min</p>
                </div>
            </div>
        </div>
    </div>
    )
}