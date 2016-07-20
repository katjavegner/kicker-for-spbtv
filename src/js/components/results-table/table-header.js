import React from 'react';

export default class TableHeader extends React.Component {

  render() {
    return (
      <thead>
        <tr className='data-table__row data-table__row--first'>
          <th className='data-table__header'>Место</th>
          <th className='data-table__header'>Команда</th>
          <th className='data-table__header'>Кол-во игр</th>
          <th className='data-table__header'>Выигрышей</th>
          <th className='data-table__header'>Поражений</th>
          <th className='data-table__header'>Счет</th>
        </tr>
      </thead>
    );
  }
}
