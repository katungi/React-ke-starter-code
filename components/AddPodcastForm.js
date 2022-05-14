import { useForm } from 'react-hook-form';
import InputSpacer from './InputSpace';
import Input from './inputs';

const FormError = ({ errorMessage }) => {
  return <p className='text-red-300 mt-1'>{errorMessage}</p>;
};

export default function AddPodcastForm({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <InputSpacer>
        <Input
          placeholder='Podcast Creator'
          name='creator'
          formRef={register({ required: "Required" })}
        />
        {errors.creator && (
          <FormError errorMessage='Name of Creator is required' />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Title of Podcast'
          name='title'
          formRef={register({ required: 'Required' })}
        />
        {errors.title && <FormError errorMessage='Title is required' />}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder='Art'
          name='art'
          formRef={register({ required: 'Required' })}
        />
        {errors.art && <FormError errorMessage='Art URL is required' />}
      </InputSpacer>

      <button
        className='bg-green-700 rounded-md p-4 text-blue-100'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
}
