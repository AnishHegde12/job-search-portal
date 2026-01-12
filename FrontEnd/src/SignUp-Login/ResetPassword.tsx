import { useState } from "react"
import { changePassword, sendOtp, verifyOtp } from "../Services/UserService"
import { Modal,TextInput,Button,PinInput,PasswordInput} from '@mantine/core';
import { IconAt, IconLock } from "@tabler/icons-react";
import { signupValidation } from "../Services/formValidation";
import { errorNotification, successNotification } from "../Services/NotificationService";

const ResetPassword = (props: any) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [otpsent, setOtpSent] = useState(false)
    const [otpSending, setOtpSending] = useState(false)
    const [otpVerified, setOtpVerified] = useState(false)
    const handleSendOtp = () => {
        setOtpSending(true);
        sendOtp(email).then((res) => {
            setOtpSent(true);
            successNotification("OTP Sent Successfully", "Please check your email for the OTP.");
            setOtpSending(false);
        }).catch((err) => {
            console.log(err);
            errorNotification("OTP Sending Failed", err.response.data.errorMessage || "Failed to send OTP. Please try again.");
            setOtpSending(false);
        })
    }
    const handleverifyOtp = (value: string) => {
        verifyOtp(email, value).then((res) => {
            console.log(res);
            setOtpVerified(true);
            successNotification("OTP Verified Successfully","Enter your new password below.");
        }).catch((err) => {
            console.log(err);
            errorNotification("OTP Verification Failed", err.response.data.errorMessage || "Failed to verify OTP. Please try again.");
        })
    }
    const resendOtp = () => {
        handleSendOtp();
    }
    const changeEmail = () => {
        setOtpSent(false);
        setEmail('');
    }
    const handleResetPassword = () => {
        changePassword(email, password).then((res) => {
            console.log(res);
            successNotification("Password Changed Successfully", "You can now login with your new password.");
            props.close();
        }).catch((err) => {
            console.log(err);
            errorNotification("Password Reset Failed", err.response.data.errorMessage || "Failed to change password. Please try again.");
        })
    }
     
    return <Modal opened={props.opened} onClose={props.close} title="Reset Password">
        <div className="flex flex-col gap-6">
            <TextInput value={email} onChange={(e) => setEmail(e.target.value)} size="md" name="email" withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email"
                rightSection={<Button loading={otpSending && !otpsent} onClick={handleSendOtp} variant="filled" size="xs" autoContrast className="bg-bright-sun-400 text-black mr-1" disabled={email === '' || otpsent}>Send OTP</Button>} rightSectionWidth="xl" />
        </div>
        {otpsent && <PinInput onComplete={handleverifyOtp} length={6} type="number" size="md" gap="lg" className="mx-auto" />}
        {otpsent && !otpVerified &&
            <div className="flex gap-2">
                <Button fullWidth color="brightSun.4" loading={otpSending} onClick={resendOtp} variant="light" size="xs" autoContrast>Resend OTP</Button>
                <Button onClick={changeEmail} variant="light" size="xs" autoContrast>Change Email</Button>
            </div>
        }
        {
            otpVerified && 
            <PasswordInput value={ password } error={ passwordError } onChange={ (e) => {setPassword(e.target.value); setPasswordError(signupValidation("password", e.target.value))} } name="password" leftSection={ <IconLock size={ 18 } stroke={ 1.5 } /> } label="Password" withAsterisk placeholder="Enter Password" />
        }
        {
            otpVerified && 
            <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>
        }
    </Modal>
}



export default ResetPassword