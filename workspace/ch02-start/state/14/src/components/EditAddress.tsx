import { Fragment } from "react";

interface AddressBook {
  id: number;
  name: string;
  value: string;
}

interface EditAddressProps {
  addressBook: AddressBook[];
  handleAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function EditAddress({ addressBook, handleAddressChange }: EditAddressProps){
  const list = addressBook.map(address => {
    return(
      <Fragment key={ address.id }>
        <label htmlFor={ address.id.toString() }>{ address.name }</label>
        {/* value가 추가 되는 순간 제어 컴포넌트로 바뀌고, Change 이벤트가 꼭 따라와야 함 */}
        <input id={ address.id.toString() }
        type="text"
        name={ address.id.toString() }
        value={ address.value }
        onChange={ handleAddressChange } />
        <br />
      </Fragment>
    );
  });
  return list;
}

export default EditAddress;