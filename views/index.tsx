import React from 'react';

interface FeedItemProps {
    feed: any;
}

const FeedItem: React.FC<FeedItemProps> = ({
    feed: { title, link, content, extraTitle, pictureUri },
}: FeedItemProps): JSX.Element => {
    return (
        <a
            href={link}
            className="card flex flex-col gap-3 bg-slate-900"
        >
            <div className="row">
                {pictureUri && (
                    <div className="flex flex-col flex-0 w-24 min-w-fit">
                        <img
                            crossOrigin="anonymous"
                            src={pictureUri}
                            alt={`Picture of ${title}`}
                            className="card-on-card w-24 h-24 p-0 object-cover"
                        />
                    </div>
                )}
                <div className="col flex-1 gap-3">
                    <h2 className="text-lg font-medium">
                        {title}
                        {extraTitle && (
                            <span className="text-sm font-medium text-gray-400">
                                &nbsp;&middot;&nbsp;{extraTitle}
                            </span>
                        )}
                    </h2>
                    <p className="text-gray-400 text-sm">{content}</p>
                </div>
            </div>
        </a>
    );
};

interface FeedsCardProps {
    feeds: Array<any>;
    title: string;
    seeMoreLink?: string;
}

const FeedsCard: React.FC<FeedsCardProps> = ({
    feeds,
    title,
    seeMoreLink,
}: FeedsCardProps): JSX.Element => {
    return (
        <div className="glass-card gap-4 flex flex-col">
            <div className="row">
                <h2 className="text-2xl font-medium">{title}</h2>
            </div>
            <div className="row">
                <div className="col w-full">
                    {feeds &&
                        feeds.map((feed, i) => (
                            <FeedItem
                                feed={feed}
                                key={i}
                            />
                        ))}
                </div>
            </div>
            {seeMoreLink && (
                <div className="row flex justify-end">
                    <a
                        href={seeMoreLink}
                        className="font-bold link"
                    >
                        See more
                    </a>
                </div>
            )}
        </div>
    );
};

interface IndexProps {
    twitter?: Array<any>;
    github?: Array<any>;
    medium?: Array<any>;
}

const Index = ({ github, medium, twitter }: IndexProps) => {
    return (
        <div className="container">
            <div className="adaptative-row">
                <div className="col w-full md:w-5/12">
                    <div className="glass-card gap-4 flex flex-col">
                        <div className="row">
                            <div className="col">
                                <img
                                    src="assets/img/me.jpg"
                                    alt="Picture of Maxime F."
                                    className="card-on-card w-36 h-36 p-0"
                                />
                            </div>
                            <div className="col">
                                <h1 className="text-3xl font-bold">
                                    Maxime F.
                                    <span className="text-base block mt-2 text-gray-400">
                                        Fullstack Lead & Developer
                                    </span>
                                    <span className="text-base block text-gray-400">
                                        Dart &middot; TS &middot; PHP
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="row justify-end items-center">
                            <div className="col">
                                <a
                                    href="https://twitter.com/McSsym"
                                    target="_blank"
                                    className="font-bold link"
                                >
                                    Twitter
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://github.com/mcssym"
                                    target="_blank"
                                    className="font-bold link"
                                >
                                    GitHub
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://medium.com/@mcssym"
                                    target="_blank"
                                    className="font-bold link"
                                >
                                    Medium
                                </a>
                            </div>
                        </div>
                    </div>
                    <a
                        href="mailto://contact@mcssym.me"
                        target="_blank"
                        className="font-bold card inline-block align-middle"
                    >
                        @ Contact &middot;{' '}
                        <span className="font-semibold text-sm text-gray-400">
                            contact@mcssym.me
                        </span>
                    </a>
                    {twitter && (
                        <FeedsCard
                            title="Twitter interests"
                            feeds={twitter ?? []}
                        />
                    )}
                </div>
                <div className="col w-full md:w-7/12">
                    {medium && (
                        <FeedsCard
                            title="Medium stories"
                            feeds={medium ?? []}
                            seeMoreLink="https://medium.com/feed/@mcssym"
                        />
                    )}
                    {github && (
                        <FeedsCard
                            title="GitHub repos"
                            feeds={github ?? []}
                            seeMoreLink="https://github.com/mcssym"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Index;
