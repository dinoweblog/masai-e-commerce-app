export const Card = ({ item }) => {
  return (
    <div className="card" style={{ marginTop: "40px" }}>
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  );
};

// brand
// :
// "Apple"
// category
// :
// "smartphones"
// description
// :
// "An apple mobile which is nothing like apple"
// discountPercentage
// :
// 12.96
// id
// :
// 1
// images
// :
// Array(5)
// 0
// :
// "https://i.dummyjson.com/data/products/1/1.jpg"
// 1
// :
// "https://i.dummyjson.com/data/products/1/2.jpg"
// 2
// :
// "https://i.dummyjson.com/data/products/1/3.jpg"
// 3
// :
// "https://i.dummyjson.com/data/products/1/4.jpg"
// 4
// :
// "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)
// price
// :
// 549
// rating
// :
// 4.69
// stock
// :
// 94
// thumbnail
// :
// "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// title
// :
// "iPhone 9"
