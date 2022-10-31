/* eslint-disable */

const getListDtoInType = shape({
  id: uu5String(512).isRequired(),
});

const getListAddUserToListDtoInType = shape({
  id: uu5String(512).isRequired(),
  userId: uu5String(512).isRequired(),
});

const getListRenameListDtoInType = shape({
  id: uu5String(512).isRequired(),
  newName: uu5String(512).isRequired(),
});

const getListCreateDtoInType = shape({
  id: uu5String(512).isRequired(),
  name: uu5String(512).isRequired(),
  owner: uu5String(512).isRequired(),
  members: array(integer()).isRequired(),
  items: array(
    shape({
      id: uu5String(512).isRequired(),
      name: uu5String(512).isRequired(),
      checkedInList: boolean().isRequired(),
      amount: uu5String(512).isRequired(),
    })
  ).isRequired(),
});


const getListRemoveDtoInType = shape({
  id: uu5String(512).isRequired(),
});
