import { Formik, Form, Feild } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: '',
}

const onSubmit = (values) => {
  console.log(values)
}

//validation with yup library
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
})

export const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {' '}
      <Form>
        <div className='form-control'>
          {' '}
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          {formik.touched.name && formik.errors.name && (
            <div className='error'>{formik.errors.name}</div>
          )}
        </div>

        <div className='form-control'>
          {' '}
          <label htmlFor='email'>Email</label>
          <Feild type='email' id='email' name='email' />
          {formik.touched.email && formik.errors.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </div>

        <div className='form-control'>
          {' '}
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          {formik.touched.channel && formik.errors.channel && (
            <div className='error'>{formik.errors.channel}</div>
          )}
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
