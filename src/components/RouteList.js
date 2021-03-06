import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import WayLine from './WayLine';
import Fuse from 'fuse.js';
import { GrSearch } from 'react-icons/gr';
import { bussesRef, routesRef } from '../api/firebase';
import moment from 'moment/moment.js';
import drawingOnMap from '../assets/drawingOnMap.png';

const RouteList = ({ handleSetPath }) => {
  const [showAvailableBuses, setShowAvailableBuses] = useState(null);
  const [query, setQuery] = useState('');
  const [routes, setRoutes] = useState([]);
  // eslint-disable-next-line
  const [busses, setBusses] = useState([]);

  const getRoutes = useCallback(async () => {
    const snapshot = window.isJest
      ? []
      : await routesRef.get().catch(console.log);
    const routes = [];
    snapshot.forEach((doc) => {
      routes.push({ ...doc.data(), id: doc.id });
    });
    setRoutes(routes);
  }, [setRoutes]);

  const getBusses = useCallback(
    async (routeId) => {
      const snapshot = await bussesRef
        .where('route_id', '==', routeId)
        .get()
        .catch(console.log);

      const busses = [];
      snapshot.forEach((doc) => {
        busses.push({ ...doc.data(), id: doc.id });
      });
      setBusses(busses);
    },
    [setBusses]
  );

  useEffect(() => {
    getRoutes();
  }, [getRoutes]);

  const handleShowAvailableBuses = (id) => {
    setShowAvailableBuses((oldId) => (oldId === id ? null : id));
    handleSetPath(JSON.parse(routes.find((r) => r.id === id).path));
    if (id !== showAvailableBuses) getBusses(id);
  };

  const handleOnSearch = (event) => {
    setQuery(event.target.value);
  };

  const options = {
    includeScore: true,
    keys: ['name', 'way.name', 'time', 'availableBuses.busNumber'],
  };

  const fuse = new Fuse(routes, options);
  const results = fuse.search(query);
  const RouteResults = query ? results.map((result) => result.item) : routes;

  const timeParse = (duration) => {
    console.log(duration);
    if (duration) {
      // eslint-disable-next-line react/prop-types
      const timeFrom = duration.substring(0, 4);
      // eslint-disable-next-line react/prop-types
      const timeTo = duration.substring(4, 8);
      // eslint-disable-next-line react/prop-types
      return `
    ${moment(timeFrom, 'hhmm').format('HH:mm')}-${moment(timeTo, 'hhmm').format(
        'HH:mm'
      )}`;
    }
  };

  return (
    <>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <td colSpan="2" className="pl-8 text-primary font-semibold">
              Route Lists
            </td>
            <td colSpan="2">
              <div className="text-gray-600 p-2 float-right flex items-center border-2 border-gray-300 bg-white h-10 rounded-lg mx-6 my-2">
                <GrSearch />
                <input
                  className="pl-4 text-sm focus:outline-none"
                  type="search"
                  value={query}
                  onChange={handleOnSearch}
                  name="search"
                  placeholder="Find"
                />
              </div>
            </td>
          </tr>
          <tr className="bg-gray-200 h-12">
            <th align="left" className="pl-16">
              Route
            </th>
            <th>Route Way</th>
            <th>Available time</th>
            <th></th>
          </tr>
        </thead>
        <tbody align="center">
          {RouteResults.map((route) => {
            const { id, name, way, availability } = route;
            return (
              <React.Fragment key={id}>
                <tr key={id} className="border-b">
                  <td align="left" className="text-lg pl-16">
                    {name}
                  </td>
                  <td>
                    <WayLine way={way} />
                  </td>
                  <td>{timeParse(availability)}</td>
                  <td
                    className="fill-current text-primary hover:text-blue-700 cursor-pointer"
                    onClick={() => handleShowAvailableBuses(id)}
                  >
                    <img className="w-8" src={drawingOnMap} alt="draw on map" />
                  </td>
                </tr>
                {/* {showAvailableBuses === id
                  ? // <tr>
                    //   <td>{availableBuses[0].busNumber}</td>
                    //   <td>@JalalArif todo:add busList component here</td>
                    // </tr>
                    busses.map((bus) => <tr key={bus.id}>{bus.driver_name}</tr>)
                  : null} */}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RouteList;

RouteList.propTypes = {
  handleSetPath: PropTypes.func.isRequired,
};
