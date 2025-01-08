function EventCard() {
    return (
        <div className="flex flex-col bg-gray-400 h-[524px] w-[340px] rounded-t-xl">
            <img src="https://cdn.ticketsanjal.com/images/2024/12/29/094229-Jamesey.jpg" alt="Not found" className="rounded-t-xl object-cover h-[340px]" />
            <div className="bg-[#FFFFFF] pt-[0.75rem] pb-[0.75rem] pl-[1rem] pr-[1rem]">
                <div className="flex flex-row justify-between">
                    <span>10 JAN</span>
                    <span>RS 500</span>
                </div>
                <p>Winter Music Fest - Kathmandu</p>
                <span>New Road Main Street, Kathmandu</span>
            </div>
            <div className="flex flex-row justify-end">
                <button className="h-8 w-60 bg-blue-600">BOOK NOW</button>
            </div>
        </div>
    )
}

export default EventCard
