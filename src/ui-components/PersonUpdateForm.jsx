/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Person } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PersonUpdateForm(props) {
  const {
    id: idProp,
    person,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    languages: "",
    description: "",
    numberOfServices: "",
    whatsappNumber: "",
    rating: "",
    education: "",
    verifiedEducation: false,
    experience: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [languages, setLanguages] = React.useState(initialValues.languages);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [numberOfServices, setNumberOfServices] = React.useState(
    initialValues.numberOfServices
  );
  const [whatsappNumber, setWhatsappNumber] = React.useState(
    initialValues.whatsappNumber
  );
  const [rating, setRating] = React.useState(initialValues.rating);
  const [education, setEducation] = React.useState(initialValues.education);
  const [verifiedEducation, setVerifiedEducation] = React.useState(
    initialValues.verifiedEducation
  );
  const [experience, setExperience] = React.useState(initialValues.experience);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personRecord
      ? { ...initialValues, ...personRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setLanguages(cleanValues.languages);
    setDescription(cleanValues.description);
    setNumberOfServices(cleanValues.numberOfServices);
    setWhatsappNumber(cleanValues.whatsappNumber);
    setRating(cleanValues.rating);
    setEducation(cleanValues.education);
    setVerifiedEducation(cleanValues.verifiedEducation);
    setExperience(cleanValues.experience);
    setErrors({});
  };
  const [personRecord, setPersonRecord] = React.useState(person);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Person, idProp) : person;
      setPersonRecord(record);
    };
    queryData();
  }, [idProp, person]);
  React.useEffect(resetStateValues, [personRecord]);
  const validations = {
    username: [],
    languages: [],
    description: [],
    numberOfServices: [],
    whatsappNumber: [],
    rating: [],
    education: [],
    verifiedEducation: [],
    experience: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          languages,
          description,
          numberOfServices,
          whatsappNumber,
          rating,
          education,
          verifiedEducation,
          experience,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Person.copyOf(personRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              languages,
              description,
              numberOfServices,
              whatsappNumber,
              rating,
              education,
              verifiedEducation,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Languages"
        isRequired={false}
        isReadOnly={false}
        value={languages}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              languages: value,
              description,
              numberOfServices,
              whatsappNumber,
              rating,
              education,
              verifiedEducation,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.languages ?? value;
          }
          if (errors.languages?.hasError) {
            runValidationTasks("languages", value);
          }
          setLanguages(value);
        }}
        onBlur={() => runValidationTasks("languages", languages)}
        errorMessage={errors.languages?.errorMessage}
        hasError={errors.languages?.hasError}
        {...getOverrideProps(overrides, "languages")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              languages,
              description: value,
              numberOfServices,
              whatsappNumber,
              rating,
              education,
              verifiedEducation,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Number of services"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfServices}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              languages,
              description,
              numberOfServices: value,
              whatsappNumber,
              rating,
              education,
              verifiedEducation,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.numberOfServices ?? value;
          }
          if (errors.numberOfServices?.hasError) {
            runValidationTasks("numberOfServices", value);
          }
          setNumberOfServices(value);
        }}
        onBlur={() => runValidationTasks("numberOfServices", numberOfServices)}
        errorMessage={errors.numberOfServices?.errorMessage}
        hasError={errors.numberOfServices?.hasError}
        {...getOverrideProps(overrides, "numberOfServices")}
      ></TextField>
      <TextField
        label="Whatsapp number"
        isRequired={false}
        isReadOnly={false}
        value={whatsappNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              languages,
              description,
              numberOfServices,
              whatsappNumber: value,
              rating,
              education,
              verifiedEducation,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.whatsappNumber ?? value;
          }
          if (errors.whatsappNumber?.hasError) {
            runValidationTasks("whatsappNumber", value);
          }
          setWhatsappNumber(value);
        }}
        onBlur={() => runValidationTasks("whatsappNumber", whatsappNumber)}
        errorMessage={errors.whatsappNumber?.errorMessage}
        hasError={errors.whatsappNumber?.hasError}
        {...getOverrideProps(overrides, "whatsappNumber")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              languages,
              description,
              numberOfServices,
              whatsappNumber,
              rating: value,
              education,
              verifiedEducation,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Education"
        isRequired={false}
        isReadOnly={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              languages,
              description,
              numberOfServices,
              whatsappNumber,
              rating,
              education: value,
              verifiedEducation,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <SwitchField
        label="Verified education"
        defaultChecked={false}
        isDisabled={false}
        isChecked={verifiedEducation}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              languages,
              description,
              numberOfServices,
              whatsappNumber,
              rating,
              education,
              verifiedEducation: value,
              experience,
            };
            const result = onChange(modelFields);
            value = result?.verifiedEducation ?? value;
          }
          if (errors.verifiedEducation?.hasError) {
            runValidationTasks("verifiedEducation", value);
          }
          setVerifiedEducation(value);
        }}
        onBlur={() =>
          runValidationTasks("verifiedEducation", verifiedEducation)
        }
        errorMessage={errors.verifiedEducation?.errorMessage}
        hasError={errors.verifiedEducation?.hasError}
        {...getOverrideProps(overrides, "verifiedEducation")}
      ></SwitchField>
      <TextField
        label="Experience"
        isRequired={false}
        isReadOnly={false}
        value={experience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              languages,
              description,
              numberOfServices,
              whatsappNumber,
              rating,
              education,
              verifiedEducation,
              experience: value,
            };
            const result = onChange(modelFields);
            value = result?.experience ?? value;
          }
          if (errors.experience?.hasError) {
            runValidationTasks("experience", value);
          }
          setExperience(value);
        }}
        onBlur={() => runValidationTasks("experience", experience)}
        errorMessage={errors.experience?.errorMessage}
        hasError={errors.experience?.hasError}
        {...getOverrideProps(overrides, "experience")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || person)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || person) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
