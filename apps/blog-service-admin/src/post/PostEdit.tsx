import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AuthorTitle } from "../author/AuthorTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
