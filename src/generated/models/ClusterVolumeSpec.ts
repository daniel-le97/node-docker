/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Topology } from './Topology';

/**
 * Cluster-specific options used to create the volume.
 *
 */
export type ClusterVolumeSpec = {
    /**
     * Group defines the volume group of this volume. Volumes belonging to
     * the same group can be referred to by group name when creating
     * Services.  Referring to a volume by group instructs Swarm to treat
     * volumes in that group interchangeably for the purpose of scheduling.
     * Volumes with an empty string for a group technically all belong to
     * the same, emptystring group.
     *
     */
    Group?: string;
    /**
     * Defines how the volume is used by tasks.
     *
     */
    AccessMode?: {
        /**
         * The set of nodes this volume can be used on at one time.
         * - `single` The volume may only be scheduled to one node at a time.
         * - `multi` the volume may be scheduled to any supported number of nodes at a time.
         *
         */
        Scope?: ClusterVolumeSpec.Scope;
        /**
         * The number and way that different tasks can use this volume
         * at one time.
         * - `none` The volume may only be used by one task at a time.
         * - `readonly` The volume may be used by any number of tasks, but they all must mount the volume as readonly
         * - `onewriter` The volume may be used by any number of tasks, but only one may mount it as read/write.
         * - `all` The volume may have any number of readers and writers.
         *
         */
        Sharing?: ClusterVolumeSpec.Sharing;
        /**
         * Options for using this volume as a Mount-type volume.
         *
         * Either MountVolume or BlockVolume, but not both, must be
         * present.
         * properties:
         * FsType:
         * type: "string"
         * description: |
         * Specifies the filesystem type for the mount volume.
         * Optional.
         * MountFlags:
         * type: "array"
         * description: |
         * Flags to pass when mounting the volume. Optional.
         * items:
         * type: "string"
         * BlockVolume:
         * type: "object"
         * description: |
         * Options for using this volume as a Block-type volume.
         * Intentionally empty.
         *
         */
        MountVolume?: any;
        /**
         * Swarm Secrets that are passed to the CSI storage plugin when
         * operating on this volume.
         *
         */
        Secrets?: Array<{
            /**
             * Key is the name of the key of the key-value pair passed to
             * the plugin.
             *
             */
            Key?: string;
            /**
             * Secret is the swarm Secret object from which to read data.
             * This can be a Secret name or ID. The Secret data is
             * retrieved by swarm and used as the value of the key-value
             * pair passed to the plugin.
             *
             */
            Secret?: string;
        }>;
        /**
         * Requirements for the accessible topology of the volume. These
         * fields are optional. For an in-depth description of what these
         * fields mean, see the CSI specification.
         *
         */
        AccessibilityRequirements?: {
            /**
             * A list of required topologies, at least one of which the
             * volume must be accessible from.
             *
             */
            Requisite?: Array<Topology>;
            /**
             * A list of topologies that the volume should attempt to be
             * provisioned in.
             *
             */
            Preferred?: Array<Topology>;
        };
        /**
         * The desired capacity that the volume should be created with. If
         * empty, the plugin will decide the capacity.
         *
         */
        CapacityRange?: {
            /**
             * The volume must be at least this big. The value of 0
             * indicates an unspecified minimum
             *
             */
            RequiredBytes?: number;
            /**
             * The volume must not be bigger than this. The value of 0
             * indicates an unspecified maximum.
             *
             */
            LimitBytes?: number;
        };
        /**
         * The availability of the volume for use in tasks.
         * - `active` The volume is fully available for scheduling on the cluster
         * - `pause` No new workloads should use the volume, but existing workloads are not stopped.
         * - `drain` All workloads using this volume should be stopped and rescheduled, and no new ones should be started.
         *
         */
        Availability?: ClusterVolumeSpec.Availability;
    };
};

export namespace ClusterVolumeSpec {

    /**
     * The set of nodes this volume can be used on at one time.
     * - `single` The volume may only be scheduled to one node at a time.
     * - `multi` the volume may be scheduled to any supported number of nodes at a time.
     *
     */
    export enum Scope {
        SINGLE = 'single',
        MULTI = 'multi',
    }

    /**
     * The number and way that different tasks can use this volume
     * at one time.
     * - `none` The volume may only be used by one task at a time.
     * - `readonly` The volume may be used by any number of tasks, but they all must mount the volume as readonly
     * - `onewriter` The volume may be used by any number of tasks, but only one may mount it as read/write.
     * - `all` The volume may have any number of readers and writers.
     *
     */
    export enum Sharing {
        NONE = 'none',
        READONLY = 'readonly',
        ONEWRITER = 'onewriter',
        ALL = 'all',
    }

    /**
     * The availability of the volume for use in tasks.
     * - `active` The volume is fully available for scheduling on the cluster
     * - `pause` No new workloads should use the volume, but existing workloads are not stopped.
     * - `drain` All workloads using this volume should be stopped and rescheduled, and no new ones should be started.
     *
     */
    export enum Availability {
        ACTIVE = 'active',
        PAUSE = 'pause',
        DRAIN = 'drain',
    }


}

