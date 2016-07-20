import React from 'react';

export default class SidebarGame extends React.Component {

  render() {
    const className = 'sidebar__item';

    return (
      <div>
        <button className={ className + '  ' + className + '--new-game' } title='New game' />
        <button className={ className + '  ' + className + '--reset' } title='Reset game' />
        <button className={ className + '  ' + className + '--cancel' } title='Cancel goal' />
      </div>
    );
  }
}
