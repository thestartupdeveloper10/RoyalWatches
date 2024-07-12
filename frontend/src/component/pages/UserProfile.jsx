import { useSelector } from 'react-redux';
import rolex from '../../assets/imgs/rolex.png';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { useEffect, useState } from 'react';
import { userRequest } from '@/service/requestMethods';

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await userRequest.get(`/orders/find/${currentUser.id}`);
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getOrders();
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div className="text-center py-8">Please log in to view your profile.</div>;
  }

  return (
    <div className='w-full'>
      <NavBar />
      <div className="mt-16 sm:p-6 lg:p-8 w-full">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden px-4 py-8 md:px-8 w-full">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={rolex}
                alt={`${currentUser.username}`}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <h1 className='uppercase tracking-wide text-sm font-semibold mt-3'>User Profile</h1>
                <h2 className="mt-2 text-2xl leading-8 font-bold text-gray-900">
                {currentUser.username}
              </h2>
              <p className="mt-2 text-gray-600">{currentUser.id}</p>
              </div>
              
              
              {/* <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                <p className="text-gray-600">Phone: 07906790323</p>
                <p className="text-gray-600">Address: Kisii</p>
              </div> */}
            </div>
          </div>
          <div className="py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Orders</h3>
            {orders.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <li key={order._id} className="py-4 mb-3 md:mb-6 px-3 rounded-md bg-[#f7f2ef]">
                    <div className="md:flex md:justify-between grid grid-cols-1 ">
                      <span className="font-bold text-gray-900">
                        Order No: #{order._id}
                      </span>
                      <span className="text-gray-600 font-bold">${order.amount}</span>
                    </div>
                    <div className='flex flex-col items-start w-full justify-start'>
                    <p className='font-bold underline underline-offset-8 mb-3'>Products:</p>
                    {order.products.map((product, index) => (
                        <div key={index} className='md:flex md:flex-row flex-col border-2 mb-2 px-2 py-3  justify-between w-full items-center'>
                        <p>Product {index + 1}:</p>
                        <p>Product Name: {product.productId}</p>
                        <p className='text-start'>Product Price: ${product.quantity}</p>
                        </div>
                    ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No orders yet.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
