

function Cart({ details, handleAddtoCart }) {
  return (

    <>
      <div className="col mb-5">
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: '0.5rem', right: '0.5rem' }}
          >
            {details.imgName}
          </div>
          <img  className="card-img-top" src={details.image} />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{details.headName} </h5>
              {(details.headName) === 'Popular Item' ? (<div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>) : (details.headName) === 'Special Item' ? (<div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>) : null}
              {(details.headName === 'Popular Item') ? null : <span className="text-muted text-decoration-line-through">
                ${details.originalPrice}.00
              </span>}
              {(details.headName === 'Popular Item') ? `$${details.singlePrice}.00` : `$${details.discountedPrice}.00`}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button className="btn btn-outline-dark mt-auto" onClick={() => handleAddtoCart(details)}>
                {details.last}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;