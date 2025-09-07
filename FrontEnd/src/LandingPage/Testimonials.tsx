import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">What<span className="text-bright-sun-400"> User </span>says about us?</div>
            <div className="flex justify-evenly">
                {
                    testimonials.map((testimonials, index) => <div key={index} className="felx felx-col gap-3 w-[23%] border border-bright-sun-400 p-3 rounded-xl mt-10">
                        <div className="flex gap-2 items-center">
                            <Avatar className="!h-14 !w-14" src="avatar1.png" alt="" />
                            <div>
                                <div className="text-lg text-mine-shaft-100 text-semibold">{testimonials.name}</div>
                                <Rating value={testimonials.rating} fractions={2} readOnly />
                            </div>
                        </div>
                        <div className="text-xs text-mine-shaft-300">{testimonials.testimonial}</div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Testimonials;