export default function Input({ placeholder, name, formRef }) {
  return (
    <input
      className='rounded p-4 text-xl w-full'
      name={name}
      placeholder={placeholder}
      ref={formRef}
    />
  );
}
