import React from "react";

const Cart = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-medium mb-6">Cart</h1>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-16">
          <div className="grow border border-gray-200 shadow-lg p-4 rounded-lg overflow-x-auto">
            <table className="w-full align-middle">
              <thead className="align-bottom">
                <th className="text-left font-medium">Products</th>
                <th className="text-left font-medium">Price</th>
                <th className="text-left font-medium">Quantity</th>
                <th className="text-left font-medium">Subtotal</th>
              </thead>
              <tbody>
                <tr className="border-b border-dashed last:border-b-0">
                  <td>
                    <div className="flex items-center gap-4 py-4">
                      <img
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        className="h-20 w-20 rounded-lg object-contain"
                      />
                      <span>Product Name</span>
                    </div>
                  </td>
                  <td>$ 99.0</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="border p-2 rounded-lg">-</button>
                      <span>1</span>
                      <button className="border p-2 rounded-lg">+</button>
                    </div>
                  </td>
                  <td>$100</td>
                </tr>
                <tr className="border-b border-dashed last:border-b-0">
                  <td>
                    <div className="flex items-center gap-4 py-4">
                      <img
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        className="h-20 w-20 rounded-lg object-contain"
                      />
                      <span>Product Name</span>
                    </div>
                  </td>
                  <td>$ 99.0</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="border p-2 rounded-lg">-</button>
                      <span>1</span>
                      <button className="border p-2 rounded-lg">+</button>
                    </div>
                  </td>
                  <td>$100</td>
                </tr>
                <tr className="border-b border-dashed last:border-b-0">
                  <td>
                    <div className="flex items-center gap-4 py-4">
                      <img
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        className="h-20 w-20 rounded-lg object-contain"
                      />
                      <span>Product Name</span>
                    </div>
                  </td>
                  <td>$ 99.0</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="border p-2 rounded-lg">-</button>
                      <span>1</span>
                      <button className="border p-2 rounded-lg">+</button>
                    </div>
                  </td>
                  <td>$100</td>
                </tr>
                <tr className="border-b border-dashed last:border-b-0">
                  <td>
                    <div className="flex items-center gap-4 py-4">
                      <img
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        className="h-20 w-20 rounded-lg object-contain"
                      />
                      <span>Product Name</span>
                    </div>
                  </td>
                  <td>$ 99.0</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="border p-2 rounded-lg">-</button>
                      <span>1</span>
                      <button className="border p-2 rounded-lg">+</button>
                    </div>
                  </td>
                  <td>$100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="md:basis-96">
            <div className="shadow-lg rounded-lg w-full p-6 border border-gray-200">
              <div>
                <h2 className="font-medium mb-4">Summary</h2>
                <p className="flex justify-between items-center mb-2">
                  <span>Subtotal</span>
                  <span>$90</span>
                </p>
                <p className="flex justify-between items-center mb-2">
                  <span>Texes</span>
                  <span>$90</span>
                </p>

                <p className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200">
                  <span>Shipping</span>
                  <span>$90</span>
                </p>
                <p className="flex justify-between items-center mb-2 font-bold">
                  <span className="">Total</span>
                  <span className="">$90</span>
                </p>
              </div>
              <button className="px-14 py-3 rounded-lg text-white bg-black w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
