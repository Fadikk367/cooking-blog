import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AdminPageWrapper, AdminActionList, AdminActionItem } from './AdminPage.css';
import { LinkCard } from './components';

import fileAddIcon from 'svgs/file-add.svg';
import fileEditIcon from 'svgs/file-edit.svg';
import fileDeleteIcon from 'svgs/file-delete.svg';


const AdminPage = () => {

  return (
    <AdminPageWrapper>
      <AdminActionList>
        <LinkCard to='admin/recipe/new' icon={fileAddIcon} text='Create recipe' bgColor={'#53b33b'}/>
        <LinkCard to='admin/recipe/123/edit' icon={fileEditIcon} text='Edit recipe' bgColor={'#e6b329'}/>
        <LinkCard to='admin/recipe/123/delete' icon={fileDeleteIcon} text='Delete recipe' bgColor={'#e62929'}/>
      </AdminActionList>
    </AdminPageWrapper>
  )
}


export default connect(null, null)(AdminPage);