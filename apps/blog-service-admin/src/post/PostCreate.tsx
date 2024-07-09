import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AuthorTitle } from "../author/AuthorTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
