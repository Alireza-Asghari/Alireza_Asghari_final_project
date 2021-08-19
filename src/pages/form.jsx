import React from 'react'
import { Form } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

const FormContent = () => {
    return (
        <div className='w-75 mx-auto mt-4'>
          <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>ایمیل</Form.Label>
                <Form.Control type="email" placeholder="ایمیل خود را وارد کنید " />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>رمز عبور</Form.Label>
                <Form.Control type="password" placeholder="رمز عبور خود را وارد کنید" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>آدرس</Form.Label>
                <Form.Control placeholder="آدرس" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label> آدرس</Form.Label>
                <Form.Control placeholder="آدرس" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>شهر</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>استان</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>انتخاب...</option>
                        <option>تهران</option>
                        <option>اصفهان</option>
                        <option>کرمان</option>
                        <option>آذربایجان شرقی</option>
                        <option> گیلان</option>
                        <option> مازندران</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>کد پستی</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group className='d-flex justify-content-end align-items-center' id="formGridCheckbox"> 
                <input type="checkbox"/>   
                <div className='pr-3'>مرا به خاطر بسپار</div>    
            </Form.Group>

            <Button variant="primary" type="button" >
                ورود به درگاه پرداخت
            </Button>
          </Form>
        </div>      

    )
}

export default FormContent
