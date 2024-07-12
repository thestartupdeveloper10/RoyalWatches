import { useSelector } from 'react-redux';
import rolex from '../../assets/imgs/rolex.png';
import Footer from '../Footer';
import NavBar from '../NavBar';

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    return <div className="text-center py-8">Please log in to view your profile.</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="mt-16 mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={rolex}
                alt={`${currentUser.username}`}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                User Profile
              </div>
              <h2 className="mt-2 text-2xl leading-8 font-bold text-gray-900">
                {currentUser.username}
              </h2>
              <p className="mt-2 text-gray-600">{currentUser.email}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                <p className="text-gray-600">Phone: 07906790323</p>
                <p className="text-gray-600">Address: Kisii</p>
              </div>
            </div>
          </div>
          {/* <div className="px-8 py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Orders</h3>
            {currentUser.orders && currentUser.orders.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {currentUser.orders.map((order) => (
                  <li key={order.id} className="py-4">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Order #{order.id}
                      </span>
                      <span className="text-gray-600">${order.total.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No orders yet.</p>
            )}
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
