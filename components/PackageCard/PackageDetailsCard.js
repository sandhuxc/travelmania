import React from 'react';

const PackageDetailsCard = ({ mor, eve, nigh }) => {
  return (
    <div>
      <h5 class='text-lg font-semibold mb-5'>Day {mor.day}</h5>

      <div class='relative overflow-x-auto block w-full bg-white shadow rounded-md'>
        <table class='w-full text-left'>
          <thead>
            <tr>
              <th class='px-4 py-5'>Time</th>
              <th class='px-4 py-5 text-right'>Event</th>
            </tr>
          </thead>

          <tbody>
            <tr class='border-t border-gray-100'>
              <td class='p-4'>{mor.time}</td>
              <td class='p-4 text-right text-orange-500 font-bold'>
                {mor.event}
              </td>
            </tr>

            <tr class='border-t border-gray-100'>
              <td class='p-4'>{eve.time}</td>
              <td class='p-4 text-right text-orange-500 font-bold'>
                {eve.event}
              </td>
            </tr>

            <tr class='border-t border-gray-100'>
              <td class='p-4'>{nigh.time}</td>
              <td class='p-4 text-right text-orange-500 font-bold'>
                {nigh.event}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageDetailsCard;
